import React, { useState } from 'react';
import Head from 'next/head';
import AlphaBanner from 'components/base/AlphaBanner';
import MainHeader from 'components/base/MainHeader';
import TernoaWallet from 'components/base/TernoaWallet';
import Create from 'components/pages/Create';
import NotAvailableModal from 'components/base/NotAvailable';

const CreatePage = () => {
  const [modalExpand, setModalExpand] = useState(false);
  const [notAvailable, setNotAvailable] = useState(false);

  const item: any = {
    name: 'Takeshi Kovacs',
    caps: 78029,
    img:
      'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80',
    verified: true,
    id: 9,
    twitter: 'rayanreynolds',
    description: 'Famous artist living in LA.',
    address: '0x31R15fd5...4e3E75bf',
    views: 1234,
    followers: 40,
    following: 21,
    walletId: 1325,
  };

  return (
    <>
      <Head>
        <title>SecretNFT - Create your NFT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="SecretNFT Marketplace, by Ternoa." />
      </Head>
      {modalExpand && <TernoaWallet setModalExpand={setModalExpand} />}
      {notAvailable && <NotAvailableModal setNotAvailable={setNotAvailable} />}
      <AlphaBanner />
      <MainHeader item={item} setModalExpand={setModalExpand} />
      <Create
        setModalExpand={setModalExpand}
        setNotAvailable={setNotAvailable}
      />
    </>
  );
};

export default CreatePage;
