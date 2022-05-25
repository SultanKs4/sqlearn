import { message } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import { ucfirst } from "../../common";

import {
  getUnansweredQuestion,
  testQueryBackend,
} from "../../remote-data/mahasiswa/Soal";

const useNextQuestion = (
  logData,
  resetLog,
  setCurrentTables,
  setCurrentColumns,
  setIsFeedbackDisplayed
) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [isTestingQuery, setIsTestingQuery] = useState(false);
  const [isAnswerSaved, setIsAnswerSaved] = useState(false);

  const [questionAnswered, setQuestionAnswered] = useState([]);
  const [dataNextPertanyaan, setDataNextPertanyaan] = useState([]);

  useEffect(() => {
    setCurrentTables([]);
    setCurrentColumns([]);
    // ? Untuk Test Query dan submit jawaban itu sama
    if (isTestingQuery)
      testQueryBackend(session?.user?.tokenJWT, {
        session_id: parseInt(router.query.session_id),
        question_id: parseInt(router.query.idSoal),
        log: logData,
      })
        .then((item) => {
          message.success("Jawaban anda benar !");
          setIsFeedbackDisplayed(true);

          Object.keys(item?.data?.res_query[0]).map((column) =>
            setCurrentColumns((prev) => [
              ...prev,
              {
                key: column,
                dataIndex: column,
                title: ucfirst(column),
              },
            ])
          );

          item?.data?.res_query?.map((dataTable, id) =>
            setCurrentTables((prev) => [
              ...prev,
              {
                index: id,
                ...dataTable,
              },
            ])
          );

          resetLog();
          if (logData.pop().type === "submit") {
            setIsAnswerSaved(true);
            setQuestionAnswered((prev) => [prev, router?.query?.idSoal]);
          }
        })
        .catch((e) =>
          message.error("Gagal test query, jawaban anda belum benar ")
        );
    setIsTestingQuery(false);
  }, [isTestingQuery]);

  const fetchNextQuestion = useCallback(() => {
    if (session !== undefined)
      getUnansweredQuestion(
        session?.user?.tokenJWT,
        router.query?.session_id,
        questionAnswered
      ).then((res) => setDataNextPertanyaan(res.data));
  }, [questionAnswered]);

  useEffect(() => {
    fetchNextQuestion();
  }, [fetchNextQuestion]);

  return [
    dataNextPertanyaan,
    isAnswerSaved,
    setIsAnswerSaved,
    setIsTestingQuery,
  ];
};

export default useNextQuestion;
