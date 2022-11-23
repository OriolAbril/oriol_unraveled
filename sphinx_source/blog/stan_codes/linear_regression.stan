data {
  int<lower=0> N;
  vector[N] x;
  vector[N] y;
}

parameters {
  real b0;
  real b1;
  real<lower=0> sigma_e;
}

model {
  b0 ~ normal(0, 20);
  b1 ~ normal(0, 20);
  for (i in 1:N) {
    y[i] ~ normal(b0 + b1 * x[i], sigma_e);
  }

}

generated quantities {
    vector[N] log_lik;
    vector[N] y_hat;
    for (i in 1:N) {
        log_lik[i] = normal_lpdf(y[i] | b0 + b1 * x[i], sigma_e);
        y_hat[i] = normal_rng(b0 + b1 * x[i], sigma_e);
    }
}
