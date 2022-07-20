import { SliderContainer, SliderText } from '../../styles/slider';
import { Slide, } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef } from "react";
import { useState } from 'react';


const messages = [

    "Free delivery from 50 PLN",
    "Free return of the purchased product",
    "Only fresh stuff",

];

export default function Slider() {
    const containerRef = useRef();
    const [show, setShow] = useState(true);
    const [messageIndex, setMessageIndex] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 3000);
        const intervalId = setInterval(() => {
            // get next message
            setMessageIndex((i) => (i + 1) % messages.length);

            // slide the message in
            setShow(true);

            setTimeout(() => {
                setShow(false);
            }, 3000);
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <SliderContainer ref={containerRef} overflow="hidden">
            <Slide
                direction={show ? "left" : "right"}
                in={show}
                container={containerRef.current}
                timeout={{
                    enter: 1000,
                    exit: 500,
                }}
            >
                <Box display="flex" justifyContent="center" alignItems="center">
                    <SliderText>
                        {messages[messageIndex]}
                    </SliderText>
                </Box>
            </Slide>
        </SliderContainer>
    );
}
