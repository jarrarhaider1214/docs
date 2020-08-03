$(document).ready(function () {
    var header = $(".sidebar");
    header.addClass('sidebarMarginTop')
    $(window).scroll(function () {

        var scroll = $(window).scrollTop();

        if (scroll >= 1) {
            header.removeClass('sidebarMarginTop').addClass("sidebarMarginTop_0");
        }
        else {
            header.removeClass("sidebarMarginTop_0").addClass('sidebarMarginTop');
        }
    });
    $(`<footer class="footer">,
    <div class="footer-block-3">
<div class="container">
<div class="row no-gutters">
<div class="col-12 col-lg-8 footer-block-3-left">

<div class="row">
<div class="col-4">
    <h4>Product</h4>
    <ul>
        <li><a style="color:#D1DCEA;" href="https://cloudplex.io/">Product</a></li>
        <li><a style="color:#D1DCEA;" href="https://cloudplex.io/features/">Solutions</a></li>
                     </ul>
</div>

<div class="col-4">
    <h4>Resources</h4>
    <ul>
  
        <li><a style="color:#D1DCEA;" href="https://cloudplex.io/blog/">Blogs</a></li>
        <li> <a style="color:#D1DCEA;" href="https://learning.cloudplex.io/learning/">Hands-on Labs</a></li>
        <li><a style="color:#D1DCEA;" href="https://docs.cloudplex.io/">Documentation</a></li>
     
    </ul>
</div>

<div class="col-4 padding_right">
    <h4>Company</h4>
    <ul>
        <li><a style="color:#D1DCEA;" href="https://cloudplex.io/about/"> Learn About CloudPlex</a>
        </li>
        <li><a style="color:#D1DCEA;" href="https://cloudplex.io/terms-of-service/"> Terms of Service</a>
        </li>
        <li><a style="color:#D1DCEA;" href="https://cloudplex.io/privacy-policy/"> Privacy Policy</a>
        </li>
        <li><a style="color:#D1DCEA;" href="https://cloudplex.io/terms-of-use/">Terms of Website Use</a>
        </li>
        <li></li>
        <li></li>
    </ul>
</div>
</div>
</div>

<div class="col-12 col-lg-4 footer-block-3-right">
<div class="text-center">
<div class="col-md-12 col-lg-12">
    <h4 class="text-center cloud_native_running">GET YOUR KUBERNETES APPLICATIONS UP AND RUNNING IN MINUTES
    </h4>
    <a href="https://app.cloudplex.io/register?planName=developer-free" target="_blank" class="btn-yellow-pricing" rel="noopener noreferrer" style="color: #272E37;    font-weight: 700;text-transform: inherit;">
      GET STARTED FREE
  </a>
</div>
<div class="col-md-12 col-lg-12 order-md-1 order-lg-2 mt-2">
    <div class="footer-block-3-icons">
        <span data-toggle="tooltip" title="" data-original-title="Facebook"><a href="https://www.facebook.com/cloudplex.io/" target="_blank"> <i class="fa fa-facebook icon footer-social-icon" aria-hidden="true"></i></a> </span>
        <span data-toggle="tooltip" title="" data-original-title="Linkedin"> <a href="https://pk.linkedin.com/company/cloudplex-inc" target="_blank"><i class="fa fa-linkedin icon footer-social-icon" aria-hidden="true"></i> </a></span>
        <span data-toggle="tooltip" title="" data-original-title="Twitter"> <a href="https://twitter.com/cloud_plex" target="_blank"><i class="fa fa-twitter icon footer-social-icon" aria-hidden="true"></i></a></span>

        <span data-toggle="tooltip" title="" data-original-title="Github"><a href="#" target="_blank"><i class="fa fa-github-alt icon footer-social-icon" aria-hidden="true"></i></a>  </span>
        <span data-toggle="tooltip" title="" data-original-title="Youtube"><a href="https://www.youtube.com/channel/UCcKuhc6in_Q6RN6u2H3gXMg" target="_blank"> <i class="fa fa-youtube-play icon footer-social-icon" aria-hidden="true"></i></a> </span>
    </div>
</div>
</div>
</div>

</div>

</div>
<div class="textwidget custom-html-widget">
<div class="footer-bottom">
<a href="https://cloudplex.io/">  <img class="footer-logo" src="images/footer_logo.png" alt="Cloudplex"></a>
</div>
</div>
</div>
<h1 class="keyword_hidden">cloud native applications</h1>
<h1 class="keyword_hidden">Ultramesh</h1>
<h1 class="keyword_hidden">Multiple cloud native tools</h1>
</footer>`).insertAfter("#main");
}
);
