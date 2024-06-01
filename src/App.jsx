import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { HeroHeader } from "./components/HeroHeader";
import { HumanizerForm } from "./components/HumanizerForm";

import styles from "./App.module.css";
import { StandardizerForm } from "./components/StandardizerForm/StandardizerForm";

dayjs.extend(utc);
dayjs.extend(timezone);

function App() {
  return (
    <div className={styles.app}>
      <HeroHeader />
      <div className={styles.formsContainer}>
        <HumanizerForm />
        <StandardizerForm />
      </div>
    </div>
  );
}

export default App;
