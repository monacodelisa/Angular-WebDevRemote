import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		CommonModule,
    RouterLink,
		RouterLinkActive,
		RouterOutlet,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit, OnDestroy {
	title = "WebDevRemote";
  opened!: boolean;
	mobileQuery: MediaQueryList;

	fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);

	private _mobileQueryListener: () => void;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.mobileQuery = media.matchMedia("(max-width: 600px)");
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

  ngOnInit(): void {
    this.opened = true;
  }

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

}
