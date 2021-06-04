import { FC, useRef,useEffect,useState } from 'react';
import {SoundOutlined} from '@ant-design/icons';
import {fetchFile} from '@/api/modules/server/test';
const Voice: FC<{ fileUrl: string }> = ({ fileUrl, children }) => {
    const [url,setUrl]=useState<string>("");
    useEffect(()=>{
        fetchFile(fileUrl).then(res=>{
            if(res){
                setUrl(res);
            }
        })
    },[])
    const audioRef = useRef<HTMLAudioElement>(null);
    const paly = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    }
    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    }
    return (
        <div>
            {children}
            <SoundOutlined onMouseEnter={paly} onMouseLeave={pause} style={{ fontSize: '20px', color: '#08c' }} />
            <audio key={url} loop ref={audioRef} >
                <source src={url} type="audio/mp3" />
            </audio>
        </div>
    )
}
export default Voice;