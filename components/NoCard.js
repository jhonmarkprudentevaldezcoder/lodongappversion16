import { motion } from "framer-motion";

export default function NoCard() {
  return (
    <div>
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="text-center font-sans text-base font-normal leading-normal text-black mt-12"
      >
        등록된 연락처가 없습니다. <br />
        <span className="font-bold ">‘새 연락처 추가’</span> 를 선택해 연락처를
        추가해 보세요.
      </motion.p>
    </div>
  );
}
