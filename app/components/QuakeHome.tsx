import Image from "next/image";
import { useNavigate } from "react-router-dom";
import { Path } from "../constant";
import { useChatStore } from "../store";
import { Mask } from "../store/mask";
import styles from "./quake-home.module.scss";

const QuakeHome = () => {
  const navigate = useNavigate();
  const chatStore = useChatStore();

  const startChat = (mask?: Mask) => {
    setTimeout(() => {
      chatStore.newSession(mask);
      navigate(Path.Chat);
    }, 10);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div className={styles["title"]}>氢信ChatGPT助手</div>

      <div
        style={{
          background: "#EFF5FF",
          flexGrow: 1,
          padding: 14,
          display: "flex",
          gap: 14,
          height: "100%",
        }}
      >
        <div className={styles["side"]}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 4,
              background: "#2E80FF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
            onClick={() => navigate(Path.Home)}
          >
            Chat
          </div>
          <div
            onClick={() => navigate(Path.Home)}
            style={{
              width: 44,
              height: 44,
              borderRadius: 4,
              background: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <Image
              src="/plus (2).png"
              width={24}
              height={24}
              alt="新增频道"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div
          style={{
            background: "white",
            flexGrow: 1,
            borderRadius: 8,
            padding: "16px 10px",
          }}
        >
          <div
            style={{
              marginBottom: 14,
            }}
          >
            角色广场
          </div>
          <div className={styles["main"]}>
            <Image
              src="/Frame 1054.png"
              width={130}
              height={120}
              alt="1"
              quality={100}
              style={{
                objectFit: "cover",
              }}
              onClick={() => startChat()}
            />
            <Image
              src="/Frame 1054-1.png"
              width={130}
              height={120}
              alt="1"
              quality={100}
              style={{
                objectFit: "cover",
              }}
              onClick={() => startChat()}
            />
            <Image
              src="/Frame 1054-2.png"
              width={130}
              height={120}
              alt="1"
              quality={100}
              style={{
                objectFit: "cover",
              }}
              onClick={() => startChat()}
            />
            <Image
              src="/Frame 1055.png"
              width={130}
              height={120}
              alt="1"
              quality={100}
              style={{
                objectFit: "cover",
              }}
              onClick={() => startChat()}
            />
            <Image
              src="/Frame 1055-1.png"
              width={130}
              height={120}
              alt="1"
              quality={100}
              style={{
                objectFit: "cover",
              }}
              onClick={() => startChat()}
            />
            <Image
              src="/Frame 1055-2.png"
              width={130}
              height={120}
              alt="1"
              quality={100}
              style={{
                objectFit: "cover",
              }}
              onClick={() => startChat()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuakeHome;
