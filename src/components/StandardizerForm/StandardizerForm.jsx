import { useState } from "react";
import { getStandardDate } from "../../utils/getStandardDate";
import { Button } from "../Button";
import { Form } from "../Form";
import { FormField } from "../FormField";

import styles from "./styles.module.css";

export const StandardizerForm = () => {
  const [timestamp, setTimestamp] = useState("");
  const [offset, setOffset] = useState(0);
  const [date, setDate] = useState("2024-06-01 12:00");

  const convertHandler = (e) => {
    e.preventDefault();

    const convertedDate = getStandardDate(date, offset);

    setTimestamp(convertedDate);
  };

  return (
    <Form title="Date to ISO timestamp converter">
      <FormField
        label="Human Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder=""
        type="datetime-local"
      />
      <FormField
        label="Timezone Offset"
        value={offset}
        onChange={(e) => setOffset(e.target.value)}
        placeholder="e.g. -7"
        type="number"
      />
      <FormField
        label="ISO GMT Timestamp"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
        placeholder=""
        type="text"
      />

      <div className={styles.buttonWrapper}>
        <Button onClick={convertHandler}>Convert</Button>
      </div>
    </Form>
  );
};
