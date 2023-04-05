import { Card, Forms, Modal } from '../components';
import React from 'react';
import styles from './Pages.module.scss';

export const FormPage = () => {
  const [cards, setCards] = React.useState<NewCard[]>([]);
  const [modal, setModal] = React.useState<boolean>(false);

  const addCard = (newCard: NewCard) => setCards([...cards, newCard]);

  const showModal = (isShow: boolean) => {
    setModal(isShow);

    setTimeout(() => {
      setModal(false);
    }, 2000);
  };

  return (
    <div className={styles.form_page}>
      <div className={styles.form_page_cnt}>
        <h2>Add another flag</h2>
        <Forms addCard={addCard} showModal={showModal} />
      </div>
      <Card data={cards} />
      {modal && <Modal onClose={() => showModal(false)} title="Hoooray data send!" />}
      {/* TODO: заменить константой */}
    </div>
  );
};
