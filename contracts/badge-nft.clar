;; contracts/badge-nft.clar
;; Academic Milestone Badge NFT contract

(define-non-fungible-token badge uint)

;; Map token ID -> metadata about the badge
(define-map badge-metadata 
  uint ;; token-id
  {
    owner: principal,
    student: principal,
    milestone: (string-ascii 64),
    date: (string-ascii 16)
  })

;; Tracks last minted token ID
(define-data-var last-token-id uint u0)

(define-public (mint-badge (student principal) (milestone (string-ascii 64)) (date (string-ascii 16)))
  (let (
        (new-token-id (+ (var-get last-token-id) u1))
      )
    (match (nft-mint? badge new-token-id tx-sender)
      minted-ok
      (begin
        (map-set badge-metadata new-token-id {
          owner: tx-sender,
          student: student,
          milestone: milestone,
          date: date
        })
        (var-set last-token-id new-token-id)
        (ok new-token-id)
      )
      minted-err
      (err minted-err) ;; Return the original error from nft-mint?
    )
  )
)

;; Read-only function to get badge metadata by token ID
(define-read-only (get-badge-metadata (token-id uint))
  (map-get? badge-metadata token-id)
)

;; Read-only function to get last minted token ID
(define-read-only (get-last-token-id)
  (var-get last-token-id)
)
