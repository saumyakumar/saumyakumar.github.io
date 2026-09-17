import { useState } from 'react'

const RESUME_FILE_ID = '1NEjYWGMTNgUkQezqUX5gppcA7nWo8l3H'
const RESUME_VIEW_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view?usp=drive_link`
const RESUME_PREVIEW_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`
const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`

function Resume() {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(RESUME_VIEW_URL)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = RESUME_VIEW_URL
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="resume" id="resume">
      <h2>Resume</h2>
      <div className="resume-embed">
        <iframe src={RESUME_PREVIEW_URL} title="Resume" allow="autoplay" loading="lazy" />
      </div>
      <div className="resume-actions">
        <a className="btn btn-primary" href={RESUME_DOWNLOAD_URL}>
          Download
        </a>
        <button type="button" className="btn btn-secondary" onClick={handleCopyLink}>
          {copied ? 'Link copied!' : 'Copy link'}
        </button>
      </div>
    </section>
  )
}

export default Resume
