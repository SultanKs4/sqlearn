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
  counterTestQuery,
  logData,
  resetLog,
  setCurrentTables,
  setCurrentColumns,
  setIsFeedbackDisplayed,
  setFeedbackContent
) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [isTestingQuery, setIsTestingQuery] = useState(false);
  const [isAnswerSaved, setIsAnswerSaved] = useState(false);

  const [questionAnswered, setQuestionAnswered] = useState([]);
  const [dataNextPertanyaan, setDataNextPertanyaan] = useState([]);

  const saveQuestionAnswered = useCallback(() => {
    setIsAnswerSaved(true);

    localStorage.setItem("question_answered", [
      localStorage.getItem("question_answered"),
      router?.query?.idSoal,
    ]);

    setQuestionAnswered((prev) => [
      prev,
      localStorage.getItem("question_answered"),
    ]);
  }, [isTestingQuery]);

  useEffect(() => {
    // ? Untuk Test Query dan submit jawaban itu sama
    if (isTestingQuery) {
      setCurrentTables([]);
      setCurrentColumns([]);

      resetLog();
      testQueryBackend(session?.user?.tokenJWT, {
        session_id: parseInt(router.query.session_id),
        question_id: parseInt(router.query.idSoal),
        log: logData,
      })
        .then((item) => {
          message.success(item?.message);
          setIsFeedbackDisplayed(true);
          setFeedbackContent(item);

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

          // Ini terjadi kalau jawabannya benar, di percobaan ke berapapun
          if (logData.pop().type === "submit") saveQuestionAnswered();
        })
        .catch((e) => {
          message.error("Gagal test query, jawaban anda belum benar ");

          // Ini terjadi kalau sudah 17x coba test query tapi masih salah jawabannya
          if (counterTestQuery >= 17) {
            message.info(
              "Anda sudah mencoba 17x, Silahkan menuju soal berikutnya",
              5
            );
            saveQuestionAnswered();
          }
        })
        .finally(() => setIsTestingQuery(false));
    }
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
    isTestingQuery,
    dataNextPertanyaan,
    isAnswerSaved,
    setIsAnswerSaved,
    setIsTestingQuery,
  ];
};

export default useNextQuestion;
