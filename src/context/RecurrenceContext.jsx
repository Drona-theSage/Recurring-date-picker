import React, { createContext, useState } from "react";

export const RecurrenceContext = createContext(); // ✅ Named export

const RecurrenceProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [recurrencePattern, setRecurrencePattern] = useState("daily");
  const [recurringDates, setRecurringDates] = useState([]);

  return (
    <RecurrenceContext.Provider
      value={{
        startDate,
        endDate,
        recurrencePattern,
        recurringDates,
        setStartDate,
        setEndDate,
        setRecurrencePattern,
        setRecurringDates,
      }}
    >
      {children}
    </RecurrenceContext.Provider>
  );
};

export default RecurrenceProvider;