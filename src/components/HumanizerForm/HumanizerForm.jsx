import { useState } from "react";
import { getHumanDate } from "../../utils/getHumanDate";
import { Button } from "../Button";
import { FormField } from "../FormField";
import { Form } from "../Form";

import styles from "./styles.module.css";

export const HumanizerForm = () => {
  const [timestamp, setTimestamp] = useState("2024-06-01T12:00:00Z");
  const [offset, setOffset] = useState(0);
  const [date, setDate] = useState("");

  const convertHandler = (e) => {
    e.preventDefault();

    const convertedDate = getHumanDate(timestamp, offset);

    setDate(convertedDate);
  };

  return (
    <Form title="ISO to Date converter">
      <FormField
        label="ISO GMT Timestamp"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
        placeholder="e.g. 2021-03-29T12:00:00Z"
        type="text"
      />
      <FormField
        label="Timezone Offset"
        value={offset}
        onChange={(e) => setOffset(e.target.value)}
        placeholder="e.g. -7"
        type="number"
      />
      <FormField
        label="Converted Date"
        value={date?.toString()}
        onChange={(e) => setDate(e.target.value)}
        placeholder=""
        type="text"
      />
      <div className={styles.buttonWrapper}>
        <Button onClick={convertHandler}>Convert</Button>
      </div>
    </Form>
  );
};
