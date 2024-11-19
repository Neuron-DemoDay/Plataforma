import React, { useState } from 'react';
import Quadrado from './Quadrado';
import Modal from './Modal';

function Apps() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '', downloadLink: '', image: '' });

    const openModal = (title, content, downloadLink, image) => {
        setModalContent({ title, content, downloadLink, image });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f8f9fa',
            width: '100vw',
            overflow: 'hidden',
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 300px)',
                gridGap: '20px',
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <Quadrado
                    title="Spotify"
                    content="Português"
                    onClick={() => openModal(
                        'Spotify',
                        'Informações sobre o Spotify e sua utilidade...',
                        'https://www.spotify.com/br/',
                        spotifyLogo 
                    )}
                />
                <Quadrado
                    title="Notion"
                    content="Matemática"
                    onClick={() => openModal('Notion', 'Informações sobre o Notion', 'link-para-download')}
                />
            </div>
            {isModalOpen &&
                <Modal
                    title={modalContent.title}
                    content={modalContent.content}
                    onClose={closeModal}
                    downloadLink={modalContent.downloadLink}
                    image={modalContent.image}
                />
            }
        </div>
    );
}

export default Apps;
