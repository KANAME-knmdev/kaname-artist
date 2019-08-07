export default {
  name: {
    maxLength: {
      value: 30,
      message: "名前は30文字以下で入力してください"
    }
  },
  nameRuby: {
    maxLength: {
      value: 30,
      message: "フリガナは30文字以下で入力してください"
    }
  },
  birth: {},
  birthplace: {},
  joinedDate: {},
  committee: {
    maxLength: {
      value: 100,
      message: "委員会は100文字以下で入力してください"
    }
  },
  skill: {
    maxLength: {
      value: 100,
      message: "スキルは100文字以下で入力してください"
    }
  },
  note: {
    maxLength: {
      value: 100,
      message: "なにか一言は100文字以下で入力してください"
    }
  }
};
