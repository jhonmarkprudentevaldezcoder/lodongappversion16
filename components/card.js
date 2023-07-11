import Image from "next/image";
import { motion } from "framer-motion";

import { AiOutlineRight } from "react-icons/ai";
export default function Card() {
  return (
    <div className="flex items-center space-x-4 p-5 mt-2 bg-[#D9D9D9]   md:bg-[#FFFFFF] overflow-hidden">
      <div className="flex flex-row items-center justify-between gap-10">
        <Image
          className="w-12 h-12 rounded-full "
          src={"/images/Ellipse.png"}
          alt="pic"
          width={100}
          height={100}
        />
        <motion.div>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="text-sm  text-gray-900 truncate font-bold"
          >
            이름
          </motion.p>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-sm text-gray-500 truncate dark:text-gray-400 font-bold"
          >
            전화번호 직접입력or 불러오기
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm  text-gray-900 truncate font-bold"
        >
          010 1111 1111
        </motion.div>
        <div className="text-sm  text-gray-900 truncate font-bold md:hidden lg:flex">
          <motion.ul
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="flex flex-row justify-between gap-4 items-center"
          >
            <li className="bg-[#4DD39926] text-[#4DD399] p-2">
              <span>직장동료</span>
            </li>
            <li className="bg-[#4DD39926] text-[#4DD399] p-2">
              <span>중요</span>
            </li>
            <li className="bg-[#4DD39926] text-[#4DD399] p-2">
              <span>PM</span>
            </li>
            <li className="bg-[#4DD39926] text-[#4DD399] p-2">
              <span>...</span>
            </li>
          </motion.ul>
        </div>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-sm  text-gray-900 truncate font-bold"
        >
          23-07-05
        </motion.div>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="text-sm  text-gray-900 truncate font-bold"
        >
          <AiOutlineRight className="hover:cursor-pointer" />
        </motion.div>
      </div>
    </div>
  );
}
