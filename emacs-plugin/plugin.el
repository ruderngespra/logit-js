(defun logit-main (optionString)
  "Run main logit logic"
  (let (start-pos end-pos start-line end-line command)
    (write-region (point-min) (point-max) "logit.tmp.js" )
    (setq start-pos (region-beginning))
    (setq end-pos (region-end))
    (goto-char start-pos)
    (setq start-line (line-number-at-pos))
    ;; (setq start-line (- start-line 1))
    (goto-char end-pos)
    (setq end-line (line-number-at-pos))
    ;; (setq end-line (- end-line 1))
    (erase-buffer)
    (insert (shell-command-to-string (concat "logit --start " (number-to-string start-line) " --end " (number-to-string end-line) " --stdout " optionString " logit.tmp.js")))
    (delete-file "logit.tmp.js")
    (goto-char start-pos)
  )
)

(defun logit ()
  "Run logit for region in current buffer"
  (interactive)
  (logit-main "")
  )

(defun logit-verbose ()
  "Run logit in verbose mode for region in current buffer"
  (interactive)
  (logit-main "--verbose")
    )

(defun logit-remove ()
  "Run logit in verbose mode for region in current buffer"
  (interactive)
  (logit-main "--remove")
  )
