import firebaseApp from "./app";
import "firebase/storage";

const storage = firebaseApp.storage();
export const storageRef = storage.ref();

export const uploadImage = async (file: File, path: string) => {
  const metadata = {
    contentType: "image/jpeg"
  };
  const res = await storageRef
    .child(path)
    .put(file, metadata)
    .catch(() => {
      return "エラーが発生しました。";
    });
  if (typeof res === "string") {
    return res;
  } else {
    // TODO: 消す
    console.group("Upload-Icon");
    console.log("res", res);
    console.log(file);
    console.log("File size", file.size);
    console.log("File type", file.type);
    console.groupEnd();
    return "画像をアップロードしました";
  }
};

export const getImageURL = async (path: string) => {
  const iconUrl = await storageRef
    .child(path)
    .getDownloadURL()
    .catch(() => {
      console.log("storage Error");
    });
  if (iconUrl) {
    return iconUrl;
  }
};
