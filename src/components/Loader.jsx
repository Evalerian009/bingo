import ScaleLoader from "react-spinners/ScaleLoader";

import { motion, AnimatePresence } from "framer-motion"

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

function Loader() {

  return (
    <AnimatePresence>
      <motion.div 
        className="w-screen h-screen flex justify-center items-center"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.2 }}
      >
        <ScaleLoader
          color='#0ea5e9'
          loading={true}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
          margin={3}
          height={50}
          width={5}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default Loader