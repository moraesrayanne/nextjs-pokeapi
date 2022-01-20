import Image from "next/image"
import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor dolor, viverra non condimentum non, fermentum vitae nibh. Suspendisse ut enim justo. Nunc et laoreet est, eu pretium dui. Sed suscipit varius dolor, consectetur lobortis lacus efficitur id. Maecenas sapien urna, viverra fringilla mauris sed, scelerisque vestibulum ipsum. Duis hendrerit felis eu congue ullamcorper. Aliquam ultrices lorem non congue elementum. Pellentesque lacus leo, dictum eu ex id, sollicitudin viverra dolor. Donec dictum efficitur urna ac semper. Pellentesque rhoncus sollicitudin scelerisque..</p>
            <Image src="/images/charizard.png" width={300} height={300} alt="Imagem do pokemon Charizard" />
        </div>
    )
}