export interface ExcelFile {
  id: string;
  name: string;
  size: number;
  lastModified: number;
  file: File;
  groupKey: string;
}

export interface MergeResult {
  groupName: string;
  url: string;
  blob: Blob;
  fileCount: number;
}

export interface ProcessingStatus {
  isProcessing: boolean;
  isZipping?: boolean;
  progress: number;
  error: string | null;
  results: MergeResult[];
}

export enum SheetNames {
  KOSEI = '構成',
  NAIYO = '内容',
  TEMPRE = 'テンプレ'
}