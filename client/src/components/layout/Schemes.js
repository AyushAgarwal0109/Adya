import '../../assets/css/schemes.css';

const Schemes = () => {
    return ( 
        <div>
            
            <input type="radio" name="choice" id="spaces" checked="checked"/>
            <input type="radio" name="choice" id="tabs"/>
            <label for="tabs"></label>
            <label for="spaces"></label>
            <div class="card  ">
            <div class="card__content">_______ are better than _______.</div>
            <footer class="card__footer"><img src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-White-Small.png"/><span>Cards Against Developers</span>
            </footer>
            </div>
            <div class="card card--answer card--tabs">
            <div class="card__content">Tabs</div>
            <footer class="card__footer"><img src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Small.png"/><span>Cards Against Developers</span>
            </footer>
            </div>
            <div class="card card--answer card--spaces">
            <div class="card__content">Spaces</div>
            <footer class="card__footer"><img src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Small.png"/><span>Cards Against Developers</span>
            </footer>
            </div>
        </div>
     );
}
 
export default Schemes;