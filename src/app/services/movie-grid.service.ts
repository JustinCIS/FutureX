import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieGridService {

  constructor(private http: HttpClient) { }

  readCSV(file): Observable<any> {
    return this.http.get(environment.MOVIE_DATA, {responseType: 'text'});
  }

  csvJSON(csv) {
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {        
        if (!lines[i])
            continue;
        const obj = {};
        const currentline = lines[i];

        for (let j = 0; j < headers.length; j++) {
          let buildArray = currentline.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);
          buildArray = buildArray || "";

          if(!Array.isArray(buildArray))
            break;

          for(let k = 0; k < buildArray.length; k++){
            obj[headers[k]] = buildArray[k].replace(/"/g, '');
          }
          result.push(obj)
          break;
        }
    }
    return result
}
}
