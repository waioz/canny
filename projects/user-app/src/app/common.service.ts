import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  @Output() page_data: EventEmitter<String> = new EventEmitter();
  currentPage(value) {
    this.page_data.emit(value);
  }
  @Output() register_data: EventEmitter<String> = new EventEmitter();
  registerSubmit(value) {
    this.register_data.emit(value);
  }
}
