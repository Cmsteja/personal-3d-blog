import React, { useState } from 'react';
import Modal from 'react-modal';

const PDFViewer = ({ pdfUrl, onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleClose = () => {
    setModalIsOpen(false);
    onClose();
  };

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={handleClose}>
      <div>
        <button onClick={handleClose}>Close PDF Viewer</button>
        <iframe
          title="PDF Viewer"
          width="100%"
          height="500px"
          src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
          frameBorder="0"
        ></iframe>
      </div>
    </Modal>
  );
};

export default PDFViewer;
