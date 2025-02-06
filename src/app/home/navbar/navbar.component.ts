import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private elementRef: ElementRef) {}
isOpen:boolean=false;
isScrolled: boolean = false; // حالة التمرير
toggleNavbar(){
  this.isOpen=!this.isOpen;
}
  // الاستماع إلى حدث النقر في الصفحة
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    // التحقق مما إذا كان النقر خارج القائمة
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false; // إغلاق القائمة
    }
  }


    // الاستماع إلى حدث التمرير
    @HostListener('window:scroll', [])
    onWindowScroll() {
      // التحقق من موضع التمرير
      if (window.scrollY > 47) { // يمكنك تغيير القيمة 50 حسب الحاجة
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }
}

