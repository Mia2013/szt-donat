import React, {useState} from 'react';
import { Grid, Box, IconButton, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; // "+" ikon
import { Gallery, Item } from 'react-photoswipe-gallery'; // Galéria komponens
import 'photoswipe/dist/photoswipe.css';

const Foldszint = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const handleImageLoad = (event) => {
        const { naturalWidth, naturalHeight } = event.target;
        setDimensions({ width: naturalWidth/5, height: naturalHeight/5 });
      };
    const images = {
        Furdo: [
            `${process.env.PUBLIC_URL}/fotok-emelet/furdo1.jpg`,
            `${process.env.PUBLIC_URL}/fotok-emelet/furdo2.jpg`,
        ],
        Halo: [
            `${process.env.PUBLIC_URL}/fotok-emelet/halo1.jpg`,
            `${process.env.PUBLIC_URL}/fotok-emelet/halo2.jpg`,
            `${process.env.PUBLIC_URL}/fotok-emelet/halo3.jpg`,
        ],
        Padlas: [
            `${process.env.PUBLIC_URL}/fotok-emelet/padlas1.jpg`,
            `${process.env.PUBLIC_URL}/fotok-emelet/padlas2.jpg`,
        ],

        Lepcso: [
            `${process.env.PUBLIC_URL}/fotok-emelet/lepcso1.jpg`,
        ],



    };
    

    const handleOpenGallery = (room) => {
        setSelectedRoom(room);
    };

    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
            backgroundColor: '#f0f0f0',
            overflowY: 'auto',
        }}
    >
        <Box
            sx={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/emelet.jpg)`,
                width: '900px',
                height: '900px',
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                position: 'relative',
            }}
        >
                {/* Kattintható "+" ikonok a szobákhoz */}
                <Tooltip title="Fürdő" arrow>

                    <IconButton
                        onClick={() => handleOpenGallery('Furdo')}
                        sx={{
                            position: 'absolute',
                            top: '25%',
                            left: '35%',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Háló" arrow>

                    <IconButton
                        onClick={() => handleOpenGallery('Halo')}
                        sx={{
                            position: 'absolute',
                            top: '30%',
                            left: '60%',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Padlas" arrow>

                    <IconButton
                        onClick={() => handleOpenGallery('Padlas')}
                        sx={{
                            position: 'absolute',
                            top: '60%',
                            left: '30%',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Lépcső" arrow>

                    <IconButton
                        onClick={() => handleOpenGallery('Lepcso')}
                        sx={{
                            position: 'absolute',
                            top: '60%',
                            left: '60%',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
               
    


            </Box>

            {selectedRoom && (
                <Box sx={{ marginTop: 4, width: '80%', maxWidth: '1200px' }}>
                    <Gallery>
                        {images[selectedRoom]?.map((image, index) => (
                            <Item
                                key={index}
                                original={image}
                                thumbnail={image}
                                width={dimensions.width}
                                height={dimensions.height}                           
                            >
                                {({ ref, open }) => (
                                    <img
                                        ref={ref}
                                        onClick={open}
                                        src={image}
                                        alt={`${selectedRoom} ${index + 1}`}
                                        style={{
                                            cursor: 'pointer',
                                            width: '100px',
                                            height: '100px',
                                            objectFit: 'cover',
                                            margin: '5px',
                                        }}
                                        onLoad={handleImageLoad} 
                                    />
                                )}
                            </Item>
                        ))}
                    </Gallery>
                </Box>
            )}
        </Box>
    );
}

export default Foldszint;
