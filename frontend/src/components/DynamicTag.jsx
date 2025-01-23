import React from 'react'

const DynamicTag = ({ customId, className, content, tag }) => {
    const Tag = tag; // HTML tag'ını dinamik olarak belirler
    if (tag == "br") return <><br /><hr /></> 
    return <Tag id={customId} className={className} dangerouslySetInnerHTML={{ __html: content }} />;
}

export default DynamicTag