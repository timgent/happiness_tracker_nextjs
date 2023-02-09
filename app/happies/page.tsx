'use client';

import Head from 'next/head'
import { PrimaryButton } from '@/components/buttons'
import React from 'react';
import Modal from 'react-modal';
import HappyForm from './HappyForm';

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
    function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }


  return (
    <>
      <Head>
        <title>Happiness Tracker</title>
        <meta name="description" content="Track your happy thing each day!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-slate-400">
        <h1>Happiness Tracker with NextJS</h1>
        <PrimaryButton onClick={openModal}>Woop woop</PrimaryButton>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="I'm a modal!!"
        >
          <HappyForm/>
        </Modal>
      </main>
    </>
  )
}
