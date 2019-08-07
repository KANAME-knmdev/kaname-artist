import React, { useState } from "react";
import useForm from "react-hook-form";
import Validation from "../../../validation";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const FormDialog: React.FC<any> = ({ open, handleClose, update }) => {
  const { register, handleSubmit, errors, clearError } = useForm<any>();
  const [isError, setE] = useState<boolean>(false);
  const onSubmit = handleSubmit(async (data: any) => {
    console.log(data);
    console.log(errors);
    const result = update(data);
    if (result) {
      setE(false);
      handleClose();
    } else {
      setE(true);
    }
  });
  console.log(errors);
  const onClose = () => {
    if (!!errors) {
      clearError();
    }
    handleClose();
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>プロフィール</DialogTitle>
      <DialogContent>
        <DialogContentText>
          スキルに関してはプログラミング言語等書いてください。特技でも可
          {isError &&
            "更新に失敗しました。時間を置いてもう一度試してください。"}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="名前"
          type="text"
          fullWidth
          name="name"
          inputRef={register(Validation.name)}
          error={!!errors.name}
          helperText={errors.name ? <span>{errors.name.message}</span> : " "}
        />
        <TextField
          margin="dense"
          label="フリガナ"
          type="text"
          fullWidth
          name="nameRuby"
          inputRef={register(Validation.nameRuby)}
          error={!!errors.nameRuby}
          helperText={
            errors.nameRuby ? <span>{errors.nameRuby.message}</span> : " "
          }
        />
        <TextField
          margin="dense"
          label="誕生日"
          type="text"
          fullWidth
          name="birth"
          inputRef={register(Validation.birth)}
          error={!!errors.birth}
          helperText={errors.birth ? <span>{errors.birth.message}</span> : " "}
        />
        <TextField
          margin="dense"
          label="出身地"
          type="text"
          fullWidth
          name="birthplace"
          inputRef={register(Validation.birthplace)}
          error={!!errors.birthplace}
          helperText={
            errors.birthplace ? <span>{errors.birthplace.message}</span> : " "
          }
        />
        <TextField
          margin="dense"
          label="入社日"
          type="text"
          fullWidth
          name="joinedDate"
          inputRef={register(Validation.joinedDate)}
          error={!!errors.joinedDate}
          helperText={
            errors.joinedDate ? <span>{errors.joinedDate.message}</span> : " "
          }
        />
        <TextField
          margin="dense"
          label="所属委員会"
          type="text"
          fullWidth
          name="committee"
          inputRef={register(Validation.committee)}
          error={!!errors.committee}
          helperText={
            errors.committee ? <span>{errors.committee.message}</span> : " "
          }
        />
        <TextField
          margin="dense"
          label="スキル"
          type="text"
          fullWidth
          multiline
          rows={3}
          rowsMax={3}
          name="skill"
          inputRef={register(Validation.skill)}
          error={!!errors.skill}
          helperText={errors.skill ? <span>{errors.skill.message}</span> : " "}
        />
        <TextField
          margin="dense"
          label="なにか一言"
          type="text"
          fullWidth
          multiline
          rows={3}
          rowsMax={3}
          name="note"
          inputRef={register(Validation.note)}
          error={!!errors.note}
          helperText={errors.note ? <span>{errors.note.message}</span> : " "}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>キャンセル</Button>
        <Button onClick={onSubmit} color="primary">
          更新
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default FormDialog;
