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
            `${process.env.PUBLIC_URL}/fotok-fsz/furdo1.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/furdo2.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/furdo3.jpg`,
        ],
        Dolgozo: [
            `${process.env.PUBLIC_URL}/fotok-fsz/dolgozo1.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/dolgozo2.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/dolgozo3.jpg`,
        ],
        Konyha: [
            `${process.env.PUBLIC_URL}/fotok-fsz/konyha1.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/konyha2.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/konyha3.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/konyha4.jpg`,
        ],
        Eloszoba: [
            `${process.env.PUBLIC_URL}/fotok-fsz/eloszoba1.jpg`,
        ],
        Lepcso: [
            `${process.env.PUBLIC_URL}/fotok-fsz/lepcso1.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/konyha2.jpg`,
        ],
        Nappali: [
            `${process.env.PUBLIC_URL}/fotok-fsz/nappali1.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/nappali2.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/nappali3.jpg`,
        ],
        Garazs: [
            `${process.env.PUBLIC_URL}/fotok-fsz/garazs1.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/garazs2.jpg`,
        ],
        Pince: [
            `${process.env.PUBLIC_URL}/fotok-fsz/pince1.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/pince2.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/pince3.jpg`,
        ],
        "garazs-kivul": [
            `${process.env.PUBLIC_URL}/fotok-fsz/garazs-kivul1.jpg`,
        ],
        "nappali-kivul": [
            `${process.env.PUBLIC_URL}/fotok-fsz/nappali-kivul1.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/nappali-kivul2.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/nappali-kivul3.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/nappali-kivul4.jpg`,
        ],
        "bejarat-kivul": [
            `${process.env.PUBLIC_URL}/fotok-fsz/bejarat-kivul1.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/bejarat-kivul2.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/bejarat-kivul3.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/bejarat-kivul4.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/bejarat-kivul5.jpg`,
        ],
        "del-kivul": [
            `${process.env.PUBLIC_URL}/fotok-fsz/del-kivul1.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/del-kivul2.jpg`,
        ],
        "nyugat-kivul": [
            `${process.env.PUBLIC_URL}/fotok-fsz/nyugat-kivul1.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/nyugat-kivul2.jpg`,
            `${process.env.PUBLIC_URL}/fotok-fsz/nyugat-kivul3.jpg`,
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
                backgroundImage: `url(${process.env.PUBLIC_URL}/fsz.jpg)`,
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
                            top: '30%',
                            left: '30%',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Dolgozó" arrow>

                    <IconButton
                        onClick={() => handleOpenGallery('Dolgozo')}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '30%',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Konyha" arrow>

                    <IconButton
                        onClick={() => handleOpenGallery('Konyha')}
                        sx={{
                            position: 'absolute',
                            top: '40%',
                            left: '45%',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Előszoba" arrow>

                    <IconButton
                        onClick={() => handleOpenGallery('Eloszoba')}
                        sx={{
                            position: 'absolute',
                            top: '58%',
                            left: '45%',
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
                            top: '53%',
                            left: '55%',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Nappali" arrow>

                    <IconButton
                        onClick={() => handleOpenGallery('Nappali')}
                        sx={{
                            position: 'absolute',
                            top: '45%',
                            left: '70%',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Garázs" arrow>

                    <IconButton
                        onClick={() => handleOpenGallery('Garazs')}
                        sx={{
                            position: 'absolute',
                            top: '20%',
                            left: '70%',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Garázs kívül" arrow>

                    <IconButton
                        onClick={() => handleOpenGallery('garazs-kivul')}
                        sx={{
                            position: 'absolute',
                            top: '20%',
                            left: '90%',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Nappali kívül" arrow>

                    <IconButton
                        onClick={() => handleOpenGallery('nappali-kivul')}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '87%',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Bejárat kívül" arrow>

                    <IconButton
                        onClick={() => handleOpenGallery('bejarat-kivul')}
                        sx={{
                            position: 'absolute',
                            top: '80%',
                            left: '50%',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Pince" arrow>

                    <IconButton
                        onClick={() => handleOpenGallery('Pince')}
                        sx={{
                            position: 'absolute',
                            top: '68%',
                            left: '45%',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Déli oldal kívül" arrow>

                    <IconButton
                        onClick={() => handleOpenGallery('del-kivul')}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '10%',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Nyugati oldal kívül" arrow>

                    <IconButton
                        onClick={() => handleOpenGallery('nyugat-kivul')}
                        sx={{
                            position: 'absolute',
                            top: '15%',
                            left: '40%',
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
