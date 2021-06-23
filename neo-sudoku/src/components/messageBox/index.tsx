import React, { useEffect, useRef } from "react";
import styles from './styles.module.css';
import messagesActions from "../../redux/actions/messages";
import { useDispatch } from "react-redux";

const MessageBox: React.FunctionComponent<any> = ({ messageType, message }) => {
  const divRef: any = useRef(null);
  const dispatch = useDispatch();

  console.log(messageType);

  useEffect(() => {
    const f = async () => {
      setTimeout(() => {
        if (divRef.current) {
          divRef.current.style.display = 'none';
          dispatch(messagesActions.setMessage('', ''));
        }
      }, 3000);
      
    }
    f();
  }, [])

  return (<div ref={divRef} className={styles["alert"]} style={{ backgroundColor: messageType === 'error' ? '#f44336' : 'rgb(47, 185, 134)' }}>
    <span className={styles["closebtn"]} onClick={(e: any) => e.target.parentElement.display = 'none'}>&times;</span>
    {message}
  </div>)
}

export default MessageBox;