export type User = {
  email: string;
};

export type Item = {
  name: string;
  checked: boolean;
  lastChecked: number;
  checkingCount: number;
  listingPriority: number;
};

export type List = {
  owner: User;
  contributors: User[];
  slug: string;
  name: string;
  items: Item[];
};
