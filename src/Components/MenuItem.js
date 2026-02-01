import React, {useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from 'react'
import ReactAudioPlayer from 'react-audio-player';


function MenuItem({menuItem, id, setId}) {
    const linkify = (text) => {
        if (!text) return '';
        // If manual anchors are present, leave text unchanged
        if (/<a\b[^>]*>/i.test(text)) return text;
        // Linkify bare URLs while avoiding attribute contexts and quotes
        return text.replace(/(^|[^"'==])(https?:\/\/[^\s<)"']+)/g, (match, prefix, rawUrl) => {
            const url = rawUrl.replace(/[.,!?)]*$/, '');
            const trailing = rawUrl.slice(url.length);
            return `${prefix}<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>${trailing}`;
        });
    };
    const [expanded, setExpanded] = useState(true);
    return (
        <div className={`MenuItem`}>
            {
                menuItem.map((item) =>
                {
                    return <div className={`portfolio`} key={item.id}>
                        <h5>
                            {/*{!item.link ? "" : <a target = "_blank" href={item.link}>*/}
                            {/*    <FontAwesomeIcon icon={item.icon} className='icon'/>*/}
                            {/*</a>}*/}
                            <div className="title">
                                {item.title}
                            </div>
                        </h5>

                        <div className={`project-content`}>
                            <div className={`${expanded && (id === -1 || item.id === id)? 'text-cover-plain' : 'text-cover'}`}></div>
                            {/*<button className="expand-btn" onClick={() => {*/}
                            {/*    if(!expanded)*/}
                            {/*    {*/}
                            {/*        setId(item.id);*/}
                            {/*        setExpanded(true);*/}
                            {/*    }*/}
                            {/*    else*/}
                            {/*    {*/}
                            {/*        setId(-1);*/}
                            {/*        setExpanded(false);*/}
                            {/*    }*/}
                            {/*}}>Expand</button>*/}
                            <div className="flex-container">
                                <p className="description" dangerouslySetInnerHTML={{
                                    __html: linkify(item.descriptions ? (item.descriptions[0] || "") : "")
                                }} />
                                {(() => {
                                        if (item.images && item.images[0]) {
                                            return <div>
                                                <img className="img"
                                                     src={item.images[0]}
                                                     alt=""/>
                                                <div
                                                    className="img-caption">{item.imagecap[0]}</div>
                                            </div>
                                        }
                                    }
                                )()}
                                <p className="description" dangerouslySetInnerHTML={{
                                    __html: linkify(item.descriptions ? (item.descriptions[1] || "") : "")
                                }} />
                                {/*{(() => {*/}
                                {/*    if (item.audio && item.audiocap) {*/}
                                {/*        return <div className="audio-container">*/}
                                {/*            <div>*/}
                                {/*                <ReactAudioPlayer className="audio-player"*/}
                                {/*                                  src={item.audio[0]}*/}
                                {/*                                  controls*/}
                                {/*                />*/}
                                {/*                <div className="audio-caption">{item.audiocap[0]}</div>*/}
                                {/*            </div>*/}
                                {/*            <div>*/}
                                {/*                <ReactAudioPlayer className="audio-player"*/}
                                {/*                                  src={item.audio[1]}*/}
                                {/*                                  controls*/}
                                {/*                />*/}
                                {/*                <div className="audio-caption">{item.audiocap[1]}</div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    }*/}
                                {/*})()}*/}
                                <p className="description" dangerouslySetInnerHTML={{
                                    __html: linkify(item.descriptions ? (item.descriptions[2] || "") : "")
                                }} />
                                {(() => {
                                        if (item.images && item.images[1]) {
                                            return <div>
                                                <img className="img"
                                                     src={item.images[1]}
                                                     alt=""/>
                                                <div className="img-caption">{item.imagecap[1]}</div>
                                            </div>
                                        }
                                    }
                                )()}
                                <p className="description" dangerouslySetInnerHTML={{
                                    __html: linkify(item.descriptions ? (item.descriptions[3] || "") : "")
                                }} />
                                {(() => {
                                        if (item.images && item.images[2]) {
                                            return <div>
                                                <img className="img"
                                                     src={item.images[2]}
                                                     alt=""/>
                                                <div className="img-caption">{item.imagecap[2]}</div>
                                            </div>
                                        }
                                    }
                                )()}
                                <p className="description" dangerouslySetInnerHTML={{
                                    __html: linkify(item.descriptions ? (item.descriptions[4] || "") : "")
                                }} />
                                {(() => {
                                        if (item.images && item.images[3]) {
                                            return <div>
                                                <img className="img"
                                                     src={item.images[3]}
                                                     alt=""/>
                                                <div className="img-caption">{item.imagecap[3]}</div>
                                            </div>
                                        }
                                    }
                                )()}
                                <p className="description" dangerouslySetInnerHTML={{
                                    __html: linkify(item.descriptions ? (item.descriptions[5] || "") : "")
                                }} />
                                <p className="description" dangerouslySetInnerHTML={{
                                    __html: linkify(item.descriptions ? (item.descriptions[6] || "") : "")
                                }} />

                                {(() => {
                                        if (item.images && item.images[4]) {
                                            return <div>
                                                <img className="img"
                                                     src={item.images[4]}
                                                     alt=""/>
                                                <div className="img-caption">{item.imagecap[4]}</div>
                                            </div>
                                        }
                                    }
                                )()}
                                <div className="description" dangerouslySetInnerHTML={{
                                    __html: item.citations && item.citations.length > 0
                                        ? `<h3>References</h3><ul style="list-style-type: none; padding-left: 0;">${item.citations.map((citation, index) => `<li style="margin-bottom: 5px;">[${index + 1}] ${linkify(citation)}</li>`).join('')}</ul>`
                                        : ""
                                }} />
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default MenuItem;
