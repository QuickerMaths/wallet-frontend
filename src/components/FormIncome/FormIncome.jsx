import React, { useRef } from "react";

import styles from "./FormIncome.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";
import BtnAddTrans from "../BtnAddTrans/BtnAddTrans";
import Calendar from "../Calendar/Calendar";
import { ReactComponent as CalendarIcon } from "../../img/calendar.svg";
import transactionsApiSlice from "../../redux/slices/api/transactions/transactionsApiSlice";

const validationSchema = Yup.object().shape({
  amount: Yup.number("Enter a valid amount")
    .positive("Amount should be positive")
    .required("Amount is required")
    .max(999999999, "Amount is too large")
    .typeError("Amount must be a number"),
  date: Yup.date()
    .max(moment().endOf("day"), "Date cannot be in the future")
    .required("Date is required"),
  comment: Yup.string(),
});

const FormIncome = () => {
  const [addTransaction] = transactionsApiSlice.useAddTransactionMutation();
  const calendarRef = useRef(null);

  const openCalendar = () => {
    if (calendarRef.current && calendarRef.current.openCalendar) {
      calendarRef.current.openCalendar();
    }
  };

  return (
    <Formik
      initialValues={{
        amount: "",
        date: moment().format("YYYY-MM-DD HH:mm:ss"),
        comment: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        addTransaction({
          income: true,
          amount: values.amount,
          date: values.date,
          comment: values.comment,
        });
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className={styles.form}>
          <div>
            <Field
              className={styles.input}
              name="amount"
              type="number"
              placeholder="0.00"
              autoComplete="off"
            />
            <ErrorMessage name="amount" component="div" />
          </div>

          <div className={styles.separatorShort}></div>

          <div>
            <div className={styles.calendarWrap}>
              <Calendar
                ref={calendarRef}
                value={values.date}
                onChange={(date) =>
                  setFieldValue("date", date.format("YYYY-MM-DD"))
                }
                name="date"
              />

              <CalendarIcon
                onClick={openCalendar}
                className={styles.calendarIcon}
              />
            </div>
            <ErrorMessage name="date" />
          </div>

          <div className={styles.separatorShort}></div>

          <div>
            <Field
              as="textarea"
              className={`${styles.input} ${styles.input__comment}`}
              name="comment"
              placeholder="Comment"
              autoComplete="off"
            />
            <ErrorMessage name="comment" />
          </div>

          <div className={styles.separatorLong}></div>

          <BtnAddTrans
            onSubmit={
              isSubmitting
                ? null
                : () =>
                    document
                      .querySelector("form")
                      .dispatchEvent(new Event("submit"))
            }
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormIncome;
