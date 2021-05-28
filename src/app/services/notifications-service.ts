import { Injectable } from '@angular/core';
import { VisitaTecnica } from '../model/visitaTecnica.model';
import { Notification } from 'src/shared/types/Notification';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private _notifications = new BehaviorSubject<Notification[]>(
    []
  );

  constructor() { }

  get notifications() {
    return this._notifications.asObservable();
  }

  setNotifications(notifications: Notification[]) {
    this._notifications.next(notifications);
  }

}
