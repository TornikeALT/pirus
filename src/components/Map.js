import '../styles/Map.css'

function Map() {
    return (
        <section className='map_section'>
            <div className="map_container">
                <iframe
                    title="Google Map"
                    width="2500"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14164.261557403775!2d44.83528890648082!3d41.72765671388369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d56e6ba8b37%3A0x629e02d9672c7678!2z4YOS4YOQ4YOg4YOT4YOU4YOc4YOY4YOQIOGDqOGDlOGDleGDkOGDoOGDk-GDnOGDkOGDq-GDlA!5e0!3m2!1ska!2sge!4v1692608563544!5m2!1ska!2sge"
                    allowFullScreen
                ></iframe>

            </div>
        </section>
    );
}

export default Map;