import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  DocumentContext,
  DocumentProvider,
} from "../../context/DocumentProvider";
import { convertHTML } from "../../utils/functions";
import DynamicTag from "../../components/DynamicTag";
import { Helmet } from "react-helmet";

const DocumentPage = ({}) => {
  const { slug } = useParams();
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [currentFragment, setCurrentFragment] = useState();
  const { fragments, subtitles, titles } = useContext(DocumentContext);

  useEffect(() => {
    async function getAll() {
      const title = await titles.find((title) => title.slug == slug);
      const subtitle = subtitles.filter(
        (subtitle) => subtitle.title == title.id
      );
      console.log(fragments);
      setCurrentTitle(title);
      setCurrentSubtitle(subtitle);
    }

    getAll();
  }, [fragments, subtitles, titles]);

  if (!currentTitle) return <>Yukleniyor..</>;

  return (
    <div className="content h-full overflow-y-auto">
      <Helmet>
        <title>{`${currentTitle.title}`} | B&A Documentation</title>
      </Helmet>
      <h1>{currentTitle.title}</h1>
      {currentSubtitle.sort((a, b) => a.order - b.order).map((subtitle) => {
        const fragment = fragments.filter(
          (fragment) => fragment.subtitle == subtitle.id
        );
        return (
          <>
            <h2 key={subtitle.id}>{subtitle.subtitle}</h2>
            <div className="flex flex-col bg-zinc-900 px-10 py-5 rounded-lg">
              {fragment
                .sort((a, b) => a.order - b.order)
                .map((x) => {
                  const name = currentTitle.title.toLowerCase()[0]
                  return (
                    <DynamicTag
                      className={""}
                      customId={`name-${x.id}`}
                      tag={x.tag_type}
                      content={x.content}
                    />
                  );
                })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default DocumentPage;
