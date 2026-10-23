import { useEffect, useState } from 'react'
import styles from '../styles/Index.module.css'
import Head from 'next/head';
import Link from 'next/link';

const randomSteps = (count, maxRem) => {
    const depths = []
    for (let i = 0; i <= count; i++) {
        const t = i / count
        const peak = 1 - Math.abs(2 * t - 1)
        const noise = 0.35 + Math.random() * 0.65
        depths.push(+(maxRem * Math.max(peak * noise, 0.15)).toFixed(2))
    }
    return depths
}

const buildGlitchClip = () => {
    const stepCount = 4 + Math.floor(Math.random() * 3)
    const left = randomSteps(stepCount, 1.6 + Math.random() * 1.6)
    const right = randomSteps(stepCount, 1.6 + Math.random() * 1.6)
    const points = []

    points.push(`${left[0]}rem 0`)
    points.push(`calc(100% - ${right[0]}rem) 0`)

    for (let i = 0; i < stepCount; i++) {
        const y = ((i + 1) / stepCount) * 100
        points.push(`calc(100% - ${right[i]}rem) ${y}%`)
        points.push(`calc(100% - ${right[i + 1]}rem) ${y}%`)
    }

    points.push(`${left[stepCount]}rem 100%`)

    for (let i = stepCount - 1; i >= 0; i--) {
        const y = (i / stepCount) * 100
        points.push(`${left[i + 1]}rem ${y}%`)
        points.push(`${left[i]}rem ${y}%`)
    }

    return `polygon(${points.join(', ')})`
}

const GlitchSpan = ({ children, className }) => {
    const [clipPath, setClipPath] = useState('none')

    useEffect(() => {
        setClipPath(buildGlitchClip())
    }, [])

    return (
        <span className={className} style={{ clipPath }}>
            {children}
        </span>
    )
}

const scriptURL =
    'https://script.google.com/macros/s/AKfycbypE4ELklJZ0cRdo7BhWLUtFuM11qqdKU1AQ4Rlxjx9ct1ZVCaDWXONKFo2jlLECiNj/exec'

const Index = () => {
    const [formData, setFormData] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            const form = new FormData()
            Object.keys(formData).forEach((key) => form.append(key, formData[key]))

            await fetch(scriptURL, {
                method: 'POST',
                body: form,
                mode: 'no-cors',
            })

            alert("D'éirigh leat do sheoladh ríomhphoist a chur chugainn!")
            setFormData({})
        } catch (error) {
            console.error('Nior éirigh leat do sheoladh ríomhphoist a chur chugainn:', error)
            alert('Failed to submit the form.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Gliogar</title>
            </Head>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1>FÉILE<br />GHLIOGAR</h1>
                    <p className={styles.subtitle}>
                        <span>Ealaín</span>
                        <span>·</span>
                        <span>Pobal</span>
                        <span>·</span>
                        <span>Teanga</span>
                    </p>
                </div>
                <GlitchSpan className={styles.logo}>
                    <img src="/logos/gliogar_ban_trans.png" alt="Lógó Ghliogar" />
                </GlitchSpan>
            </div>
            <div className={styles.content}>
                <div>
                    <GlitchSpan className={styles.location}>An Cheathrú Rua,<br />Conamara</GlitchSpan>
                    <GlitchSpan className={styles.date}>5 - 7 Márta 2027</GlitchSpan>
                </div>
                <div>
                    <GlitchSpan>Clár na féile ag tíocht go luath...</GlitchSpan>
                </div>
                <div>
                    <GlitchSpan>Ceol</GlitchSpan>
                    <GlitchSpan>Damhsa</GlitchSpan>
                    <GlitchSpan>Amharc-Ealaín</GlitchSpan>
                    <GlitchSpan>Stair</GlitchSpan>
                    <GlitchSpan>Éiceolaíocht</GlitchSpan>
                    <GlitchSpan>Spóirt</GlitchSpan>
                </div>
                <div className={styles.signup}>
                    <h2>Liosta Seoltaí</h2>
                    <label>Bí ar an eolas ar dtús agus sínigh suas</label>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Ainm:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Mo Dhuine"
                                value={formData.name || ''}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Ríomhphost:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="modhuine@gaelmail.com"
                                value={formData.email || ''}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={isSubmitting ? styles.submitting : undefined}
                        >
                            {isSubmitting ? 'Á chlárú...' : 'Cláraigh'}
                        </button>
                    </form>
                </div>
            </div>
            <div className={styles.footer}>
                <div>
                    <img src="/logos/gcc.png" alt="Comhairle Chondae na Gaillimhe" />
                    <img src="/logos/ealain.png" alt="Ealaín na Gaeltachta" />
                </div>
                <div className={styles.footerRight}>
                    <Link href="/cartlann">&#8658; An Chartlann</Link>
                    <div className={styles.socials}>
                        <Link href="https://web.cogar.ie/pr%C3%B3if%C3%ADl/gliogar" target="_blank">
                            <img src="/icons/cogar.png" alt="Cogar" />
                        </Link>
                        <Link href="https://www.instagram.com/gliogar_" target="_blank">
                            <img src="/icons/instagram.webp" alt="Instagram" />
                        </Link>
                    </div>
                    <span>&copy; {new Date().getFullYear()} Gliogar</span>
                </div>
            </div>
            <div className={styles.bg}>
            </div>
        </div>
    );
};

export default Index;
