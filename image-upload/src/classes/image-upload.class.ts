export class ImageUpload {
  fileName: string;
  size: number; // Size in bytes
  mimeType: string; // Mime type image/png
  previewUrl: string;
  data: any;

  constructor(data: any = null) {
    this.fileName = data?.fileName || '';
    this.size = data?.size || 0;
    this.mimeType = data?.mimeType || '';
    this.previewUrl = data?.previewUrl || '';
    this.data = data?.data || null;
  }

  public get kbs(): number {
    return this.size / 1024;
  }

  public get mbs(): number {
    return this.size / 1024 / 1024;
  }

  public async getBinaryImage(): Promise<ArrayBuffer> {
    try {
      const binaryImage = await (
        await (await fetch(this.previewUrl)).blob()
      ).arrayBuffer();
      return binaryImage;
    } catch (error) {
      throw error;
    }
  }

  public async getBlobImage(): Promise<Blob> {
    try {
      const blobImage = await (await fetch(this.previewUrl)).blob();

      return blobImage;
    } catch (error) {
      throw error;
    }
  }
}
