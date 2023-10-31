function getTwitter(account: { type: string; id: string }) {
  return account.type === "twitter";
}

export default getTwitter;
