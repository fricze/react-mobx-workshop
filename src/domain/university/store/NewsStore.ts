import { createAtom } from "mobx";

export class Clock {
  atom;
  intervalHandler?: NodeJS.Timeout;
  currentDateTime: Date = new Date();

  constructor() {
    // creates an atom to interact with the MobX core algorithm
    this.atom = createAtom(
      // first param: a name for this atom, for debugging purposes
      "Clock",
      // becomes observed
      () => this.startTicking(),
      // becomes unobserved
      () => this.stopTicking()
    );
  }

  getTime(): Date {
    // let MobX know this observable data source has been used
    // reportObserved will return true if the atom is currently being observed
    // by some reaction.
    // reportObserved will also trigger the onBecomeObserved event handler (startTicking) if needed
    if (this.atom.reportObserved()) {
      return this.currentDateTime;
    } else {
      // apparantly getTime was called but not while a reaction is running.
      // So, nobody depends on this value, hence the onBecomeObserved handler (startTicking) won't be fired
      // Depending on the nature of your atom
      // it might behave differently in such circumstances
      // (like throwing an error, returning a default value etc)
      return new Date();
    }
  }

  tick() {
    this.currentDateTime = new Date();
    // let MobX know that this data source has changed
    this.atom.reportChanged();
  }

  startTicking() {
    console.log("start tick");
    this.tick();
    this.intervalHandler = setInterval(() => this.tick(), 1000);
  }

  stopTicking() {
    console.log("stopTicking");
    if (this.intervalHandler) {
      clearInterval(this.intervalHandler);
      delete this.intervalHandler;
    }
  }
}
