import React, { createRef, RefObject} from "react";

import CardContent from '@material-ui/core/CardContent';

import {Card} from "@material-ui/core";

import './video.scss';

export class Video extends React.Component {
    private videoRef: RefObject<HTMLVideoElement> = createRef<HTMLVideoElement>();

    private node: HTMLVideoElement | null = null;


    componentDidMount() {
        this.node = this.videoRef.current;
    }

    public test(): void {
        console.log('Click');

        if (this.videoRef) {
            this.node?.play().then(console.log, console.log);
        }
    }

    render() {
        return (
            <Card className={'test'} onClick={() => this.test()}>
                <CardContent>
                    <p>Test video</p>

                    <video src="http://127.0.0.1:3200/static/small.webm" controls height={300} width={400}>
                    </video>
                </CardContent>
            </Card>
        )
    };
}
