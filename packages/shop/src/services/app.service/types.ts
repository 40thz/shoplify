export type DocumentFolder = {
  name: string;
  path: string;
};

export type DocumentFile = {
  id: string;
  name: string;
  path: string;
  type: string;
  size: string;
};

export type DocumentDTO = {
  id: string;
  folder: DocumentFolder;
  files: DocumentFile[];
};
