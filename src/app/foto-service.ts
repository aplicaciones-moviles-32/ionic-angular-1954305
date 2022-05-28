import { Injectable } from '@angular/core';

import { Camera,CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class FotoSerivceService {

  public async agregarFoto() {
    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }

  constructor() { }
