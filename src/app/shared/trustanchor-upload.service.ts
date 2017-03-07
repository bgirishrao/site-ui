/**
 * Created by Brian on 10/4/2016.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class TrustanchorUploadService {

  uploadTrustanchor(url: string, files: Array<File>) :any{
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i = 0; i < files.length; i++) {
        formData.append("anchoruploadfile", files[i], files[i].name);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open("POST", url, true);
      xhr.send(formData);
    })
  }
}
