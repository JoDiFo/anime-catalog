import { HtmlProps } from "react-html-props";
import classes from "./ModalWindow.module.scss";

interface IProps {
  visible: boolean;
  setVisible: (flag: boolean) => void;
}

function ModalWindow({ children, visible, setVisible }: IProps & HtmlProps) {
  const modalClasses = [classes.modalWindow];

  if (visible) {
    modalClasses.push(classes.active);
  }

  return (
    <div className={modalClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.modalWindowContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;
