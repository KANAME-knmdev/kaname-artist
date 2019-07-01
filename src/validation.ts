const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const PASSWORD_REGEXP = /^(?=.*?[a-zA-Z])(?=.*?\d)[a-zA-Z\d]{8,255}$/;

export const LoginValidation = {
  email: {
    required: "この項目は必須です",
    pattern: {
      value: EMAIL_REGEXP,
      message: "メールアドレスの形式が間違っています"
    }
  },
  password: {
    required: "この項目は必須です"
  }
} as const;

export const JoinValidation = {
  email: {
    required: "この項目は必須です",
    pattern: {
      value: EMAIL_REGEXP,
      message: "メールアドレスの形式が間違っています"
    }
  },
  password: {
    required: "この項目は必須です",
    pattern: {
      value: PASSWORD_REGEXP,
      message: "パスワードは8~255字で半角英数字で入力してください"
    }
  },
  passwordConf: {
    required: "この項目は必須です",
    // NOTE: ここは独自
    invalid: {
      type: "invalid",
      message:
        "パスワードとパスワード（確認）が一致しません。もう一度入力してください"
    }
  }
};
