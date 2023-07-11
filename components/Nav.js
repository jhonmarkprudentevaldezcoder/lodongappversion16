import Image from "next/image";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Nav() {
  const [showFolder, setShowFolder] = useState(false);
  return (
    <aside className="md:w-1/5 lg:w-1/6">
      <div className="flex flex-col p-5 border border-e-gray-300 md:h-full">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="font-montserrat text-2xl font-bold leading-normal uppercase p-5 text-gradient-green-blue"
        >
          APP TITLE
        </motion.div>
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="md:flex flex-row lg:flex-row md:flex-col items-center gap-2 mt-5 hidden "
        >
          <Image
            alt="folder"
            width={20}
            height={20}
            src={"/images/mainfolder.png"}
          />
          <p className="text-sm font-bold flex flex-row gap-10  ">
            연락처 전체보기{" "}
            {showFolder ? (
              <AiOutlineRight
                className="hover:cursor-pointer"
                onClick={() => {
                  if (showFolder) {
                    setShowFolder(false);
                  } else {
                    setShowFolder(true);
                  }
                }}
              />
            ) : (
              <AiOutlineDown
                className="hover:cursor-pointer"
                onClick={() => {
                  if (showFolder) {
                    setShowFolder(false);
                  } else {
                    setShowFolder(true);
                  }
                }}
              />
            )}
          </p>
        </motion.div>
        <div className={`mt-5 ml-5`}>
          <ul className={`${showFolder ? "" : "hidden"}`}>
            <motion.li
              initial={{
                x: 200,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
            >
              <span className="flex flex-row gap-4">
                <Image
                  src={"/images/folder.png"}
                  width={20}
                  height={20}
                  className="folder"
                  alt="folder"
                />
                <p>폴더1</p>
              </span>
            </motion.li>
          </ul>
          <motion.span
            initial={{
              y: 200,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="hidden md:block text-[#D1D1D1] text-sm mt-5 hover:cursor-pointer hover:text-[#494848] transition ease-in-out delay-100 duration-200"
          >
            + 새 폴더 만들기
          </motion.span>
        </div>
      </div>
    </aside>
  );
}
